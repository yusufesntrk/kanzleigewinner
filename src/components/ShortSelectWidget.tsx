import { useEffect, useRef } from "react";

const SHORTSELECT_BASE_URL = "https://shortselect.com";

interface ShortSelectWidgetProps {
  widgetId: string;
  className?: string;
  minHeight?: string;
}

const ShortSelectWidget = ({ widgetId, className = "", minHeight = "400px" }: ShortSelectWidgetProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.source !== iframeRef.current?.contentWindow) return;
      if (event.data?.type === "shortselect-resize") {
        const height = Math.ceil(event.data.height);
        if (height > 0 && iframeRef.current) {
          iframeRef.current.style.height = `${height}px`;
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src={`${SHORTSELECT_BASE_URL}/embed/widget/${widgetId}`}
      title="ShortSelect Widget"
      loading="lazy"
      allow="clipboard-write"
      scrolling="no"
      className={className}
      style={{
        width: "100%",
        border: "none",
        overflow: "hidden",
        minHeight,
        height: minHeight,
        transition: "height 0.2s ease",
        display: "block",
      }}
    />
  );
};

export default ShortSelectWidget;
