import React from "react";

const FareBreakup = ({ breakup }) => (
  <div className="text-sm text-gray-600 space-y-1 mt-2">
    {breakup.map((item, idx) => (
      <div key={idx} className="flex justify-between">
        <span>{item.title }</span>
        <span> ₹{item.cost}</span>
      </div>
    ))}
  </div>
);

const FareCard = ({ classType, fare, breakup }) => (
  <div className="border rounded-xl p-4 shadow-sm bg-white hover:shadow-md transition">
    <h3 className="text-lg font-semibold text-indigo-700 mb-1">Class: {classType}</h3>
    <div className="text-md text-gray-800 font-bold">Total Fare: ₹{fare}</div>
    <FareBreakup breakup={breakup} />
  </div>
);

const FareCategory = ({ title, fares }) => {
  const filtered = fares.filter(f => f.fare && f.breakup.length > 0);

  if (filtered.length === 0) return null;

  return (
    <div className="mb-8 bg-white/10 backdrop-blur-3xl px-2 py-4 rounded-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">{title}</h2>
      <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {filtered.map((fareItem, idx) => (
          <FareCard
            key={idx}
            classType={fareItem.classType}
            fare={fareItem.fare}
            breakup={fareItem.breakup}
          />
        ))}
      </div>
    </div>
  );
};

const FareComponent = ({ data }) => {
  if (!data) return null;
  const { general, tatkal } = data;

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-indigo-900 mb-6">💰 Fare Details</h1>
      <FareCategory title="General Fare" fares={general} />
      <FareCategory title="Tatkal Fare" fares={tatkal} />
    </div>
  );
};

export default FareComponent;
