import WhatsAppIcon from "@/components/ui/icons/whatsapp-icon";
import { contactInfo } from "@/lib/contact";

export default function WhatsAppButton() {
  return (
    <a
      href={contactInfo.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`Contactar a Nexbloq por WhatsApp al ${contactInfo.phone}`}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_12px_35px_rgba(37,211,102,0.38)] transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25d366]/30 sm:bottom-7 sm:right-7"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
