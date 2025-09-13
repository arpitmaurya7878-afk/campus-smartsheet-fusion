import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  MessageCircle, 
  X, 
  Send,
  Bot,
  User
} from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m the CampusFusion assistant. How can I help you today?',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');

  const faqs = {
    'admission': 'For admissions, please visit our Admissions office or check the requirements on our website. Application deadline is usually in June.',
    'fees': 'Fee structure varies by course. B.Tech is ₹2,85,000 per year. You can pay online or visit the Finance office.',
    'hostel': 'Hostel accommodation is available for ₹25,000 per year. Contact the Hostel office for room allocation.',
    'library': 'Library is open 9 AM to 9 PM. You can borrow up to 3 books for 30 days each.',
    'attendance': 'Minimum 75% attendance is required. Check with your faculty for specific requirements.',
    'examination': 'Exam schedules are published 2 weeks in advance. Check the Examinations section.',
    'contact': 'Main office: +91-XXX-XXXXXXX, Email: info@college.edu',
    'hours': 'College hours: 9 AM to 5 PM, Monday to Friday. Saturday: 9 AM to 2 PM.'
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(faqs)) {
      if (message.includes(key)) {
        return response;
      }
    }
    
    if (message.includes('hello') || message.includes('hi')) {
      return 'Hello! I can help you with questions about admissions, fees, hostel, library, attendance, and examinations. What would you like to know?';
    }
    
    return 'I can help you with questions about admissions, fees, hostel, library, attendance, and examinations. Could you please rephrase your question?';
  };

  const handleSendMessage = () => {
    if (!currentMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: currentMessage,
      isBot: false,
      timestamp: new Date()
    };

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: getBotResponse(currentMessage),
      isBot: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setCurrentMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-all duration-200"
          size="icon"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 z-50 animate-fade-in">
          <Card className="h-full shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white rounded-t-lg">
              <CardTitle className="text-lg flex items-center">
                <Bot className="mr-2 h-5 w-5" />
                CampusFusion Assistant
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col h-full p-0">
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`flex items-start space-x-2 max-w-[80%] ${message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'}`}>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.isBot ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
                      }`}>
                        {message.isBot ? <Bot className="h-3 w-3" /> : <User className="h-3 w-3" />}
                      </div>
                      <div className={`rounded-lg p-2 text-sm ${
                        message.isBot 
                          ? 'bg-muted text-foreground' 
                          : 'bg-primary text-primary-foreground'
                      }`}>
                        {message.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="border-t p-4">
                <div className="flex space-x-2">
                  <Input
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything..."
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} size="icon" disabled={!currentMessage.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {['Admissions', 'Fees', 'Hostel', 'Library'].map((topic) => (
                    <Button
                      key={topic}
                      variant="outline"
                      size="sm"
                      className="text-xs h-6"
                      onClick={() => setCurrentMessage(`Tell me about ${topic.toLowerCase()}`)}
                    >
                      {topic}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;