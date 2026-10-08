// Central place for contact details used across pages.
// ⚠️ Replace whatsappNumber with the real number before going live —
// country code + number, digits only, no spaces, +, or dashes.
// Example: "919876543210" for a +91 98765 43210 India number.
export const CONTACT = {
  email: "adhyatamjot.singh@gmail.com",
  whatsappNumber: "918376086993",
  github: "https://github.com/CssAvenger",
  instagram: "https://www.instagram.com/addy_khatri01/",
  linkedin: "https://www.linkedin.com/in/adhyatamjot-singh/",
  liveSite: "https://adhyatamjot-singh.eu.org",
  base: "New Delhi, India",
};

export function waLink(message: string) {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function mailLink(subject: string) {
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}`;
}
