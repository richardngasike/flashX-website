"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";

/** QR code to this page (#install), shown to desktop visitors. */
export default function QrCode() {
  const [svg, setSvg] = useState("");
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent || "";
    const touchMac = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
    if (/Android|iPhone|iPad|iPod/i.test(ua) || touchMac) return;
    setDesktop(true);
    const url = `${window.location.origin}${window.location.pathname}#install`;
    QRCode.toString(url, {
      type: "svg",
      margin: 1,
      errorCorrectionLevel: "M",
      color: { dark: "#0A0D10", light: "#FFFFFF" },
    })
      .then(setSvg)
      .catch(() => setSvg(""));
  }, []);

  if (!desktop || !svg) return null;
  return (
    <div className="qr">
      <div className="qr-code" role="img" aria-label="QR code that opens this page" dangerouslySetInnerHTML={{ __html: svg }} />
      <p className="qr-text">Scan with your Android phone&apos;s camera to open this page there.</p>
    </div>
  );
}
