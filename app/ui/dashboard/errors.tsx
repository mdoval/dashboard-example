export function ErrorMessage({message}: {message: string}) {
  return (
    <div className="label">
      <span className="label-text-alt text-red-600">{message}</span>
    </div>
  );
}
