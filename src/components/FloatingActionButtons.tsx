import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const FloatingActionButtons = () => {
  const phoneNumber = '+919693529897'; // Replace with your actual phone number
  const whatsappMessage = 'Hello! I have a question about your products.'; // Default message

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">

      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className={cn(
          'rounded-full w-14 h-14 flex items-center justify-center',
          'bg-blue-500 hover:bg-amber-600 text-white',
          'shadow-lg hover:shadow-amber-400/50 shadow-amber-500/40',
          'transition-all duration-300 transform hover:scale-110',
          'ring-2 ring-amber-400 ring-opacity-70 hover:ring-opacity-100',
          'relative overflow-hidden group'
        )}
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </a>
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'rounded-full w-14 h-14 flex items-center justify-center',
          'bg-green-500 hover:bg-green-600 text-white',
          'shadow-lg hover:shadow-amber-400/50 shadow-amber-500/40',
          'transition-all duration-300 transform hover:scale-110',
          'ring-2 ring-amber-400 ring-opacity-70 hover:ring-opacity-100',
          'relative overflow-hidden group'
        )}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8" />
      </a>
    </div>
  );
};

export default FloatingActionButtons;
