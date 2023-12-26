export default function EmailFeedbackBanner({
  isSuccess,
  message,
}: {
  isSuccess: boolean;
  message: string;
}) {
  const bgColor = isSuccess ? "bg-[#47817F]/70 " : "bg-[#ED5E93]/70";

  return (
    <div
      className={`p-2 w-full text-xl rounded-sm text-center font-semibold whitespace-pre-wrap sm:whitespace-nowrap ${bgColor} `}
    >
      {message}
    </div>
  );
}
