export default function Policies() {
  const policies = [
    {
      title: "Check-in",
      content: (
        <>
          <p className="font-medium">Available 24 hours</p>
          <p>
            Guests are required to show a photo identification and credit card
            upon check-in. You’ll need to let the property know in advance what
            time you’ll arrive.
          </p>
        </>
      ),
    },
    {
      title: "Check-out",
      content: <p className="font-medium">Available 24 hours</p>,
    },
    {
      title: "Cancellation/ prepayment",
      content: (
        <p>
          Cancellation and prepayment policies vary according to accommodation
          type. Please check what{" "}
          <span className="underline text-blue-600 cursor-pointer">
            conditions
          </span>{" "}
          may apply to each option when making your selection.
        </p>
      ),
    },
    {
      title: "Children and beds",
      content: (
        <>
          <p className="font-semibold">Child policies</p>
          <p>Children of any age are welcome.</p>
          <p>
            Children 12 years and above will be charged as adults at this
            property.
          </p>
          <p>
            To see correct prices and occupancy information, please add the
            number of children in your group and their ages to your search.
          </p>
          <p className="font-semibold mt-2">Cot and extra bed policies</p>
          <p>
            The number of extra beds allowed is dependent on the option you
            choose.
          </p>
          <p>Please check your selected option for more information.</p>
          <p>There are no cots available at this property.</p>
          <p>All extra beds are subject to availability.</p>
        </>
      ),
    },
    {
      title: "No age restriction",
      content: <p>There is no age requirement for check-in</p>,
    },
    {
      title: "Pets",
      content: <p>Pets are not allowed.</p>,
    },
    {
      title: "Cash only",
      content: <p>This property only accepts cash payments.</p>,
    },
  ];

  return (
    <section className="py-8 ">
      <h2 className="text-2xl font-semibold mb-6">Policies</h2>
      <div className="border rounded-xl overflow-hidden divide-y">
        {policies.map((policy, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:gap-6 p-4 md:p-6 bg-white"
          >
            <div className="w-full md:w-1/3 font-medium text-gray-800 mb-2 md:mb-0">
              {policy.title}
            </div>
            <div className="w-full md:w-2/3 text-sm text-gray-700 space-y-1">
              {policy.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
