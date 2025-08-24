export default function TestPage() {
  return (
    <div className="min-h-screen bg-phoenix-bg text-phoenix-text p-8">
      <h1 className="text-4xl font-bold text-phoenix-orange mb-4">
        🔥 Test Page
      </h1>
      <div className="bg-phoenix-card p-6 rounded-xl border border-phoenix-border">
        <p className="text-phoenix-text">
          Si puedes ver este texto en color claro sobre fondo oscuro, los estilos están funcionando.
        </p>
        <div className="mt-4 p-4 bg-phoenix-orange text-white rounded-lg">
          Este debería ser un botón naranja
        </div>
      </div>
    </div>
  )
}
