import { useEffect, useState } from "react";

type DeviceType = "mobile" | "tablet" | "desktop";

export default function useDeviceType() {
  const [deviceTpye, setDeviceType] = useState<DeviceType>("desktop");
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setDeviceType("mobile");
      } else if (width >= 640 && width < 1024) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceTpye;
}
