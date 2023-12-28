import { useEffect, useState } from "react";

type DeviceType = "mobile" | "tablet" | "desktop";

export default function useDeviceType() {
  const [deviceType, setDeviceType] = useState<DeviceType>("desktop");
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 450) {
        setDeviceType("mobile");
      } else if (width >= 450 && width < 1024) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceType;
}
