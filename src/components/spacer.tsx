export default function Spacer({ className }: { className: string | null }) {
  return <div className={`bg-white w-full h-[1px] bg-opacity-15 ${className}`} />
}
