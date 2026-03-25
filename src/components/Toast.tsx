import { useState } from 'react';
import { Info } from 'lucide-react';

interface Toast {
  id: number;
  message: string;
}

let toastId = 0;

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string, duration = 3000) => {
    const id = toastId++;
    const newToast: Toast = { id, message };
    
    setToasts(prev => [...prev, newToast]);

    if (duration > 0) {
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id));
      }, duration);
    }

    return id;
  };

  return { toasts, showToast };
}

interface ToastContainerProps {
  toasts: Toast[];
  onRemove?: (id: number) => void;
}

export function ToastContainer({ toasts }: ToastContainerProps) {
  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] flex flex-col items-center pointer-events-none">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className="bg-slate-800/90 backdrop-blur-sm text-white px-6 py-3 rounded-full shadow-2xl text-sm font-medium mb-3 flex items-center gap-2 pointer-events-auto animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
          <Info className="w-4 h-4" />
          {toast.message}
        </div>
      ))}
    </div>
  );
}
