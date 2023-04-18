import React from "react";
import waLogo from "../assets/images/content/wa.png";

const WhatsAppShareButton = ({ text, url }) => {
  // Encode the text and URL to be shared
  const encodedText = encodeURIComponent(text);
  const encodedUrl = encodeURIComponent(url);

  // Generate the WhatsApp share link
  const whatsappShareLink = `https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`;

  return (
    <>
      <a
        href={whatsappShareLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 hover:animate-bounce"
      >
        <img src={waLogo} width={60} alt="" />
      </a>
    </>
  );
};

export default WhatsAppShareButton;
