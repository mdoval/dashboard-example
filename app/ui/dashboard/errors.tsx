export function ErrorMessage({ message }: { message: string[] }) {
  return (
    <div className="label">
      {message.map((error, index) => {
        return <span key={index} className="label-text-alt text-red-600">{error}</span>;
      })}
    </div>
  );
}
