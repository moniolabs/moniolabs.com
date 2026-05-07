import type React from 'react';
import { toast } from "sonner";

export const handleContactClick = async (e: React.MouseEvent<HTMLElement>, email: string = "enquiry@moniolabs.com") => {
  // Prevent default to manually handle the mailto trigger which works better in iframes
  e.preventDefault();

  // Let's copy the email first
  let copied = false;
  try {
    if (navigator?.clipboard?.writeText) {
       await navigator.clipboard.writeText(email);
       copied = true;
    }
  } catch (err) {
    // Ignore clipboard errors silently due to strict permission policies
  }
  
  if (!copied) {
    // Fallback if clipboard API throws or isn't available
    try {
      const textArea = document.createElement("textarea");
      textArea.value = email;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      copied = document.execCommand('copy');
      textArea.remove();
    } catch (fallbackErr) {
      // Fail completely silently to prevent error overlays in restricted iframes
    }
  }

  if (copied) {
    toast.success("Email address copied to clipboard!");
  }

  // Trigger mailto using a temporary anchor with target="_top" 
  // This helps bypass iframe sandbox restrictions in web previewers
  const a = document.createElement("a");
  a.href = `mailto:${email}`;
  a.target = "_top";
  a.click();
};
