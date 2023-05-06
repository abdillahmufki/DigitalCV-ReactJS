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
      <a href={whatsappShareLink} target="_blank" rel="noopener noreferrer">
        <div
          className="fixed bottom-5 right-3 z-50 tooltip hover:tooltip-open tooltip-left tooltip-[#fff] font-bold"
          data-tip="Hubungi Kami"
        >
          <img src={waLogo} width={60} height={60} alt="Whatsapp Logo" />
        </div>
      </a>
    </>
  );
};

export default WhatsAppShareButton;
