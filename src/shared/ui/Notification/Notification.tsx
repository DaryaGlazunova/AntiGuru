import { memo, useEffect, useState, type JSX } from "react";
import cn from "classnames";
import styles from "./Notification.module.scss";

type NotificationProps = {
  message: string;
  type?: "success" | "error" | "info";
  duration?: number;
  onClose?: () => void;
};

const Notification = ({
  message,
  type = "info",
  duration = 3000,
  onClose,
}: NotificationProps): JSX.Element | null => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={cn(styles.toast, styles[type], { [styles.show]: visible })}>
      {message}
    </div>
  );
};

export default memo(Notification);
