export default function Declaration() {
  return (
    <section className="hidden rounded-xl bg-white p-6 shadow print:block print:p-0 print:shadow-none">
      <h3 className="mb-4 border-b-2 border-gray-100 pb-1 text-lg font-semibold print:border-b print:text-sm">
        Declaration
      </h3>
      <div className="prose prose-sm prose-stone max-w-none text-gray-500 print:prose-sm md:prose-base">
        <p>
          I hereby declare that the above mentioned information is true to the
          best of my knowledge.
        </p>
      </div>
      <div className="mt-4 flex justify-between text-sm text-gray-500">
        <span>Date & Location:</span>
        <span className="mr-4">Lakhan Mandloi</span>
      </div>
    </section>
  );
}
