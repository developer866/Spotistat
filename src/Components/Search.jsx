import React, { useState } from "react";
import { Data1 } from "../Data/StreamingHistory_music_0";


function Song() {
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Filter based on search and date range
  const filteredSongs = Data1.filter((data) => {
    const trackMatch =
      data.trackName.toLowerCase().includes(search.toLowerCase()) ||
      data.artistName.toLowerCase().includes(search.toLowerCase());

    const itemDate = new Date(data.endTime);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    const dateMatch =
      (!start || itemDate >= start) && (!end || itemDate <= end);

    return trackMatch && dateMatch;
  });

  return (
    <div className="max-w-xl mx-auto my-auto p-4 space-y-4">
        {/* <FolderUploader /> */}
      <input
        type="text"
        placeholder="Search track or artist..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded"
      />

      <div className="flex md:flex-row flex-col justify-center gap-4 m-auto">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-[50%] p-2 border rounded"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-[50%]  p-2 border rounded"
        />
      </div>

      {filteredSongs.slice(0, 5).map((data, index) => (
        <div key={index} className="m-0 border-b">
          <h2 className="text-lg font-semibold">{data.trackName}</h2>
          <p className="text-gray-600">{data.artistName}</p>
          <p className="text-sm text-gray-400">{data.endTime}</p>
        </div>
      ))}
    </div>
  );
}

export default Song;
