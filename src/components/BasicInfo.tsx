export default function BasicInfo() {
  return (
    <div className="rounded-xl bg-white p-6 shadow print:shadow-none">
      <h3 className="mb-6 border-b-2 border-gray-100 pb-2 text-lg font-semibold">
        Information
      </h3>
      <div className="space-y-4">
        <div className="flex justify-between">
          <div className="text-gray-400">Location</div>
          <div className="text-right font-medium text-gray-600">
            Indore, India
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-gray-400">Experience</div>
          <div className="text-right font-medium text-gray-600">8+ years</div>
        </div>
        <div className="flex justify-between">
          <div className="text-gray-400">Relocation</div>
          <div className="text-right font-medium text-gray-600">No</div>
        </div>
      </div>
    </div>
  );
}
