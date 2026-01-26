'use client'

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    // Replace with your WhatsApp number
    const phoneNumber = '+254748421758'
    const message = 'Hello Brandriko, I would like to inquire about your services.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="whatsapp-btn fixed bottom-8 right-8 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-50 hover:bg-green-600 transition-colors duration-300"
      aria-label="Contact us on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp text-3xl"></i>
    </button>
  )
}