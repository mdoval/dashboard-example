export default function PublishedControl({
  id,
  estado,
}: {
  id: number;
  estado: boolean;
}) {

  return (
    <form>
      <input
        type="checkbox"
        className="toggle"
        name="published"
        defaultChecked={estado}
      />
    </form>
  );
}
