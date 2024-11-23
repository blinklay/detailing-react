export default function PagesHeader({ children, style }) {
  return (
    <h1 className="text-header text-3xl font-bold mt-20" style={style}>
      {children}
    </h1>
  );
}
