// TODO: replace with the real business WhatsApp number (international format, no symbols)
const WHATSAPP_NUMBER = "10000000000";

const WHATSAPP_MESSAGE = "Hi Altair, I'd like to book a 20-minute call.";

export const WHATSAPP_CALL_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

// Builds a WhatsApp deep link pre-filled with an enquiry message for a specific training/course.
export const whatsappTrainingLink = (courseName, message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message || `Hi Altair, I'd like to enquire about the ${courseName}.`
  )}`;

// Dedicated contact number for Fullstack Mobile & Web Development enquiries.
const FULLSTACK_DEV_NUMBER = "2348135578170";

export const whatsappFullstackDevLink = (courseName, message) =>
  `https://wa.me/${FULLSTACK_DEV_NUMBER}?text=${encodeURIComponent(
    message || `Hi Altair, I'd like to enquire about the ${courseName}.`
  )}`;
