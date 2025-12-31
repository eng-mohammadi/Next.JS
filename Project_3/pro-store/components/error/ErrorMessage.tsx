import { ErrorMessageProps } from "@/dataTypes/types/errorMessage";

export default function ErrorMessage({ title, message }: ErrorMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="p-6 w-1/3 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-destructive">{message}</p>
      </div>
    </div>
  );
}
