const Certi = () => {
  return (
    <div className="bg-black text-white py-20" id="certificates">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Certifications</h2>
        <div className="flex flex-col justify-between md:flex-row items-center md:space-x-12">
          <h3 className="text-2xl font-bold  text-green-400 mb-4">
            My Certificates
          </h3>
        </div>
        <div className="ml-10 space-y-4 text-bold md:flex-row items-center ">
          <ul>
            <li>
              <span>
                Completed Course on Programming in Java by NPTEL Swayam and
                scored 75% with Elite+Silver.
                <a href="https://drive.google.com/file/d/1hX8zp0eYna5l2TKqtSkpNr7McsbeY3mr/view?usp=drivesdkRnjiLpLe293Pd_3D0HA%2Fview%3Fusp%3Ddrivesdk">
                  <button
                    type="submit"
                    className="ml-2 text-red-500 hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
                  >
                    View
                  </button>
                </a>
              </span>
            </li>
            <li>
              <span>
                Completed Course on Python for Data Science by NPTEL Swayam and
                scored 69%.
                <a href="https://drive.google.com/file/d/1h_9dFF0WqMdcWeZ4z3wFzceyU7P5iiQA/view?usp=drivesdkRnjiLpLe293Pd_3D0HA%2Fview%3Fusp%3Ddrivesdk">
                  <button
                    type="submit"
                    className="ml-2 text-red-500 hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
                  >
                    View
                  </button>
                </a>
              </span>
            </li>
            <li>
              <span>
                Completed Course on Big Data Computing by NPTEL Swayam and
                scored 76% with Elite+Silver.
                <a href="https://drive.google.com/file/d/1VCkPPK6J6zghENALzuOvjzTP_c-N-GEP/view?usp=sharing">
                  <button
                    type="submit"
                    className="ml-5 text-red-500 hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
                  >
                    View
                  </button>
                </a>
              </span>
            </li>
            <li>
              <span>
                Completed Course on Python Basics for Data Science by EDX and
                IBM.
                <a href="https://drive.google.com/file/d/1hc-51EEjSO_3-RnjiLpLe293Pd_3D0HA/view?usp=drivesdk">
                  <button
                    type="submit"
                    className="ml-2 text-red-500 hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
                  >
                    View
                  </button>
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Certi;
