import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getMatchList,
  getSeriesList,
} from "../../../../Redux/Slice/User/user.slice";
import { v4 } from "uuid";
import { Generate_Token } from "../../../../Redux/Slice/Auth/auth.slice";
const Sidebar = (props) => {
  const { getSeriesListState, getMatchListState } = useSelector(
    (state) => state.UserSlice
  );
  const role = localStorage.getItem("roles");
  const [token, setToken] = useState("");
  const [expandedSeries, setExpandedSeries] = useState(null);
  const dispatch = useDispatch();

  const getSeriesListdata = getSeriesListState?.data?.response?.items;
  const getMatchListdata = getMatchListState?.data?.response?.items;

  useEffect(() => {
    const fetchData = async () => {
      const request1 = { deviceId: v4() };
      try {
        const res1 = await dispatch(Generate_Token(request1)).unwrap();
        if (res1.statusCode === 200) {
          const token = res1.data;
          setToken(token);
          await dispatch(getSeriesList(token)).unwrap();
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleMatchClick = async (matchId) => {
    if (token) {
      try {
        let data = {
          token: token,
          id: matchId,
        };
        await dispatch(getMatchList(data)).unwrap();
        setExpandedSeries((prevSeries) =>
          prevSeries === matchId ? null : matchId
        ); // Toggle the expanded series
      } catch (error) {
        console.error("Error fetching match details:", error);
      }
    }
  };

  return (
    <app-sidebar _ngcontent-nsr-c57="" _nghost-nsr-c55="">
      <aside id="sidebar" className="sidebar">
        <ul id="sidebar-nav" className="sidebar-nav">
          <img
            className="mobile-logo"
            src="/assets/images/reddybook/logo.png"
          />
          <li className="d-none d-sm-block nav-item">
            <a
              href="/assets/images/sports/detail/28127348"
              className="nav-link final-link"
            >
              <img src="/assets/images/events/menu-ipl2024.png" />
              <span className="blinker">
                <b>IPL 2024</b>
              </span>
            </a>
          </li>
          <li className="d-none d-sm-block nav-item">
            <a href="/sports/detail/1704972513" className="nav-link final-link">
              <img src="/assets/images/events/menu-loksabha.png" />
              <span className="blinker">
                <b>LOK SABHA 2024</b>
              </span>
            </a>
          </li>
          {/**/}
          {/**/}
          {/* {(role == 2 ) && (      <li className="nav-item">
            {" "}
            <Link to='/deposit' className="nav-link" aria-expanded="false">
              <img src="/assets/images/deposit-icon.png" />
              <span>Deposit</span>
              <i className="bi bi-caret-down ms-auto" />
            </Link>
          </li>)} */}

          {role == 2 && (
            <>
              <li className="nav-item">
                {" "}
                <Link to="/deposit" className="nav-link" aria-expanded="false">
                  <img src="/assets/images/deposit-icon.png" />
                  <span>Deposit</span>
                  <i className="bi bi-caret-down ms-auto" />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/withdraw" className="nav-link" aria-expanded="false">
                  <img src="/assets/images/withdrawal-icon.png" />
                  <span>Withdraw</span>
                  <i className="bi bi-caret-down ms-auto" />
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/payment-history"
                  className="nav-link"
                  aria-expanded="false"
                >
                  <img src="/assets/images/withdrawal-icon.png" />
                  <span>Payment History</span>
                  <i className="bi bi-caret-down ms-auto" />
                </Link>
              </li>
            </>
          )}
          <li className="nav-item">
            <a
              data-bs-toggle="collapse"
              className="nav-link collapsed"
              href="#collapse0"
              aria-expanded="false"
            >
              <img src="/assets/images/events/menu-4.png" />
              <span>Cricket</span>
              <i className="bi bi-caret-down ms-auto" />
            </a>

            <ul className="nav-content collapse" id="collapse0">
              {getSeriesListdata?.map((row) => (
                <li>
                  <Link
                    data-bs-toggle="collapse"
                    // href="#collapse00"
                    href={`#collapse${row.cid}`}
                    onClick={() => handleMatchClick(row?.cid)}
                    className="collapsed"
                    // aria-expanded="false"
                    aria-expanded={
                      expandedSeries === row.cid ? "true" : "false"
                    }
                  >
                    <span>{row?.title}</span>
                    <i className="bi bi-caret-down ms-auto" />
                  </Link>

                  <div
                    // className="collapse" id="collapse00"
                    className={`collapse ${
                      expandedSeries === row.cid ? "show" : ""
                    }`}
                    id={`collapse${row.cid}`}
                  >
                    <ul className="nav-second-level">
                      {getMatchListdata?.map((matchrow) => (
                        <li>
                          <Link
                            to={`match-details/${matchrow.match_id}`}
                            // data-bs-toggle="collapse"
                            className="final-link"
                          >
                            <span>{matchrow?.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </li>
          <li className="nav-item">
            <a data-bs-toggle="collapse" className="nav-link" href="#collapse1">
              <img src="/assets/images/events/menu-1.png" />
              <span>Football</span>
              <i className="bi bi-caret-down ms-auto" />
            </a>
            {/**/}
            <ul className="nav-content collapse" id="collapse1">
              <li>
                <a data-bs-toggle="collapse" href="#collapse10">
                  <span>UEFA Europa League</span>
                  <i className="bi bi-caret-down ms-auto" />
                </a>
                <div className="collapse" id="collapse10">
                  <ul className="nav-second-level">
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>UEFA Europa League</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Roma v Leverkusen</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Marseille v Atalanta</span>
                      </a>
                    </li>
                    {/**/}
                  </ul>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" href="#collapse11">
                  <span>UEFA Champions League</span>
                  <i className="bi bi-caret-down ms-auto" />
                </a>
                <div className="collapse" id="collapse11">
                  <ul className="nav-second-level">
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>UEFA Champions League</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Bayern Munich v Real Madrid</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Dortmund v Paris St-G</span>
                      </a>
                    </li>
                    {/**/}
                  </ul>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" href="#collapse12">
                  <span>English U21 Pro Development League</span>
                  <i className="bi bi-caret-down ms-auto" />
                </a>
                <div className="collapse" id="collapse12">
                  <ul className="nav-second-level">
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Hull City U21 v Ipswich Town U21</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Peterborough United U21 v Millwall U21</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Coventry City U21 v Cardiff City U21</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Fleetwood Town U21 v Colchester United U21</span>
                      </a>
                    </li>
                    {/**/}
                  </ul>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" href="#collapse13">
                  <span>Chinese Super League</span>
                  <i className="bi bi-caret-down ms-auto" />
                </a>
                <div className="collapse" id="collapse13">
                  <ul className="nav-second-level">
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Meizhou Hakka v Qingdao Youth Island</span>
                      </a>
                    </li>
                    {/**/}
                  </ul>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" href="#collapse14">
                  <span>Egyptian 2nd Division</span>
                  <i className="bi bi-caret-down ms-auto" />
                </a>
                <div className="collapse" id="collapse14">
                  <ul className="nav-second-level">
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Dekernes v Abo Qair Semads</span>
                      </a>
                    </li>
                    {/**/}
                  </ul>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" href="#collapse15">
                  <span>Israeli Cup</span>
                  <i className="bi bi-caret-down ms-auto" />
                </a>
                <div className="collapse" id="collapse15">
                  <ul className="nav-second-level">
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Hapoel Nof HaGalil v Maccabi Petach Tikva</span>
                      </a>
                    </li>
                    {/**/}
                  </ul>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" href="#collapse16">
                  <span>German Oberliga</span>
                  <i className="bi bi-caret-down ms-auto" />
                </a>
                <div className="collapse" id="collapse16">
                  <ul className="nav-second-level">
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>FSV Motor Marienberg v VfB Auerbach</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>ATSV Erlangen v SC Eltersdorf</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Spvgg Quierschied v SV Auersmacher</span>
                      </a>
                    </li>
                    {/**/}
                  </ul>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" href="#collapse17">
                  <span>Swedish Superettan</span>
                  <i className="bi bi-caret-down ms-auto" />
                </a>
                <div className="collapse" id="collapse17">
                  <ul className="nav-second-level">
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Skovde AIK v Oddevold</span>
                      </a>
                    </li>
                    {/**/}
                  </ul>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" href="#collapse18">
                  <span>South African Premier Division</span>
                  <i className="bi bi-caret-down ms-auto" />
                </a>
                <div className="collapse" id="collapse18">
                  <ul className="nav-second-level">
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Richards Bay FC v Amazulu</span>
                      </a>
                    </li>
                    {/**/}
                  </ul>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" href="#collapse19">
                  <span>Saudi Kings Cup</span>
                  <i className="bi bi-caret-down ms-auto" />
                </a>
                <div className="collapse" id="collapse19">
                  <ul className="nav-second-level">
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Al-Ittihad v Al-Hilal</span>
                      </a>
                    </li>
                    {/**/}
                  </ul>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" href="#collapse110">
                  <span>Peruvian Segunda Division</span>
                  <i className="bi bi-caret-down ms-auto" />
                </a>
                <div className="collapse" id="collapse110">
                  <ul className="nav-second-level">
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Deportivo Coopsol v Santos FC de Ica</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Molinos El Pirata v Club ADA Jaén</span>
                      </a>
                    </li>
                    {/**/}
                  </ul>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" href="#collapse111">
                  <span>Brazilian U20</span>
                  <i className="bi bi-caret-down ms-auto" />
                </a>
                <div className="collapse" id="collapse111">
                  <ul className="nav-second-level">
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>America MG U20 v Corinthians U20</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Santos U20 v Fluminense U20</span>
                      </a>
                    </li>
                    {/**/}
                  </ul>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" href="#collapse112">
                  <span>Portuguese Segunda Liga</span>
                  <i className="bi bi-caret-down ms-auto" />
                </a>
                <div className="collapse" id="collapse112">
                  <ul className="nav-second-level">
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Pacos Ferreira v AVS Futebol SAD</span>
                      </a>
                    </li>
                    {/**/}
                  </ul>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" href="#collapse113">
                  <span>English Championship</span>
                  <i className="bi bi-caret-down ms-auto" />
                </a>
                <div className="collapse" id="collapse113">
                  <ul className="nav-second-level">
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Coventry v Ipswich</span>
                      </a>
                    </li>
                    {/**/}
                  </ul>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" href="#collapse114">
                  <span>Colombian Primera B</span>
                  <i className="bi bi-caret-down ms-auto" />
                </a>
                <div className="collapse" id="collapse114">
                  <ul className="nav-second-level">
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Internacional de Palmira v Atletico FC Cali</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Tigres FC Zipaquira v Bogota</span>
                      </a>
                    </li>
                    {/**/}
                  </ul>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" href="#collapse115">
                  <span>Venezuelan Primera Division</span>
                  <i className="bi bi-caret-down ms-auto" />
                </a>
                <div className="collapse" id="collapse115">
                  <ul className="nav-second-level">
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>
                          CD Hermanos Colmenarez v Deportivo La Guaira
                        </span>
                      </a>
                    </li>
                    {/**/}
                  </ul>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" href="#collapse116">
                  <span>Brazilian Cup</span>
                  <i className="bi bi-caret-down ms-auto" />
                </a>
                <div className="collapse" id="collapse116">
                  <ul className="nav-second-level">
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Bahia v Criciuma</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Operario PR v Gremio</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Atletico MG v Sport Recife</span>
                      </a>
                    </li>
                    {/**/}
                  </ul>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" href="#collapse117">
                  <span>Argentinian Superliga Cup</span>
                  <i className="bi bi-caret-down ms-auto" />
                </a>
                <div className="collapse" id="collapse117">
                  <ul className="nav-second-level">
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Estudiantes v Boca Juniors</span>
                      </a>
                    </li>
                    {/**/}
                  </ul>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" href="#collapse118">
                  <span>Ecuadorian Serie A</span>
                  <i className="bi bi-caret-down ms-auto" />
                </a>
                <div className="collapse" id="collapse118">
                  <ul className="nav-second-level">
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Libertad FC v LDU</span>
                      </a>
                    </li>
                    {/**/}
                  </ul>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" href="#collapse119">
                  <span>CONCACAF Champions League</span>
                  <i className="bi bi-caret-down ms-auto" />
                </a>
                <div className="collapse" id="collapse119">
                  <ul className="nav-second-level">
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Pachuca v CF America</span>
                      </a>
                    </li>
                    {/**/}
                  </ul>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" href="#collapse120">
                  <span>Australian A-League Men</span>
                  <i className="bi bi-caret-down ms-auto" />
                </a>
                <div className="collapse" id="collapse120">
                  <ul className="nav-second-level">
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Central Coast Mariners v Adelaide United</span>
                      </a>
                    </li>
                    {/**/}
                  </ul>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" href="#collapse121">
                  <span>English Premier League</span>
                  <i className="bi bi-caret-down ms-auto" />
                </a>
                <div className="collapse" id="collapse121">
                  <ul className="nav-second-level">
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Chelsea v Tottenham</span>
                      </a>
                    </li>
                    {/**/}
                  </ul>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" href="#collapse122">
                  <span>UEFA Europa Conference League</span>
                  <i className="bi bi-caret-down ms-auto" />
                </a>
                <div className="collapse" id="collapse122">
                  <ul className="nav-second-level">
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Fiorentina v Club Brugge</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Aston Villa v Olympiakos</span>
                      </a>
                    </li>
                    {/**/}
                  </ul>
                </div>
              </li>
              {/**/}
            </ul>
            {/**/}
            {/**/}
          </li>
          <li className="nav-item">
            {/**/}
            {/**/}
            <a data-bs-toggle="collapse" className="nav-link" href="#collapse2">
              <img src="/assets/images/events/menu-2.png" />
              <span>Tennis</span>
              <i className="bi bi-caret-down ms-auto" />
            </a>
            {/**/}
            <ul className="nav-content collapse" id="collapse2">
              <li>
                <a data-bs-toggle="collapse" href="#collapse20">
                  <span>WTA Madrid 2024</span>
                  <i className="bi bi-caret-down ms-auto" />
                </a>
                <div className="collapse" id="collapse20">
                  <ul className="nav-second-level">
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>WTA Madrid 2024</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Keys v O Jabeur</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Mir Andreeva v A Sabalenka</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Putintseva v E Rybakina</span>
                      </a>
                    </li>
                    {/**/}
                  </ul>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" href="#collapse21">
                  <span>ATP Madrid Open</span>
                  <i className="bi bi-caret-down ms-auto" />
                </a>
                <div className="collapse" id="collapse21">
                  <ul className="nav-second-level">
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>ATP Madrid Open</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Jan-lennard Struff v Carlos Alcaraz</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Jannik Sinner v Karen Khachanov</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Felix Auger Aliassime v Casper Ruud</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Rafael Nadal v Jiri Lehecka</span>
                      </a>
                    </li>
                    {/**/}
                  </ul>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" href="#collapse22">
                  <span>WTA Lleida 2024</span>
                  <i className="bi bi-caret-down ms-auto" />
                </a>
                <div className="collapse" id="collapse22">
                  <ul className="nav-second-level">
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Deja Radanovic v X Wang</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Reb Masarova v Er Andreeva</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Aly Parks v K Siniakova</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Gjorcheska v Car Martinez Cirez</span>
                      </a>
                    </li>
                    {/**/}
                  </ul>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" href="#collapse23">
                  <span>ATP Cagliari Challenger</span>
                  <i className="bi bi-caret-down ms-auto" />
                </a>
                <div className="collapse" id="collapse23">
                  <ul className="nav-second-level">
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Thiago Agustin Tirante v Luciano Darderi</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Zsombor Piros v Zachary Svajda</span>
                      </a>
                    </li>
                    {/**/}
                  </ul>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" href="#collapse24">
                  <span>WTA Saint-Malo 2024</span>
                  <i className="bi bi-caret-down ms-auto" />
                </a>
                <div className="collapse" id="collapse24">
                  <ul className="nav-second-level">
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Iryn Shymanovich v Tikhonova</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Pe Stearns v Mar Rouvroy</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Sharma v Emil Arango</span>
                      </a>
                    </li>
                    {/**/}
                  </ul>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" href="#collapse25">
                  <span>ATP Aix en Provence Challenger</span>
                  <i className="bi bi-caret-down ms-auto" />
                </a>
                <div className="collapse" id="collapse25">
                  <ul className="nav-second-level">
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Harold Mayot v Richard Gasquet</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Stan Wawrinka v Albert Ramos Vinolas</span>
                      </a>
                    </li>
                    {/**/}
                  </ul>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" href="#collapse26">
                  <span>ATP Porto Alegre Challenger</span>
                  <i className="bi bi-caret-down ms-auto" />
                </a>
                <div className="collapse" id="collapse26">
                  <ul className="nav-second-level">
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Roberto Cid Subervi v Hady Habib</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Luis Felipe Miguel v Gonzalo Villanueva</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Guido Ivan Justo v Pedro Sakamoto</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Goncalo Oliveira v Daniel Dutra Da Silva</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Juan Carlos Prado Angelo v Dmitry Popko</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Alvaro Guillen Meza v Gonzalo Bueno</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Nicolas Zanellato v Stefanos Sakellaridis</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Gustavo Ribeiro De Almeida v Mateus Alves</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Luciano Emanuel Ambrogi v Murkel Dellien</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Calvin Hemery v Karue Sell</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Kaichi Uchida v Joao Lucas Reis Da Silva</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Igor Gimenez v Bruno Kuzuhara</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Ergi Kirkin v Adolfo Daniel Vallejo</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Juan Bautista Torres v Guilherme Clezar</span>
                      </a>
                    </li>
                    {/**/}
                  </ul>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" href="#collapse27">
                  <span>ATP Guangzhou Challenger</span>
                  <i className="bi bi-caret-down ms-auto" />
                </a>
                <div className="collapse" id="collapse27">
                  <ul className="nav-second-level">
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Yu Hsiou Hsu v Yan Bai</span>
                      </a>
                    </li>
                    {/**/}
                  </ul>
                </div>
              </li>
              {/**/}
            </ul>
            {/**/}
            {/**/}
          </li>
          <li className="nav-item">
            {/**/}
            {/**/}
            <a
              data-bs-toggle="collapse"
              className="nav-link collapsed"
              href="#collapse3"
              aria-expanded="false"
            >
              <img src="/assets/images/events/menu-2378961.png" />
              <span>Politics</span>
              <i className="bi bi-caret-down ms-auto" />
            </a>
            {/**/}
            <ul className="nav-content collapse" id="collapse3">
              <li>
                <a data-bs-toggle="collapse" href="#collapse30">
                  <span>Others</span>
                  <i className="bi bi-caret-down ms-auto" />
                </a>
                <div className="collapse" id="collapse30">
                  <ul className="nav-second-level">
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>LOK SABHA 2024</span>
                      </a>
                    </li>
                    {/**/}
                  </ul>
                </div>
              </li>
              {/**/}
            </ul>
            {/**/}
            {/**/}
          </li>
          <li className="nav-item">
            {/**/}
            {/**/}
            <a data-bs-toggle="collapse" className="nav-link" href="#collapse4">
              <img src="/assets/images/events/menu-7.png" />
              <span>Horse Racing</span>
              <i className="bi bi-caret-down ms-auto" />
            </a>
            {/**/}
            {/**/}
            <ul className="nav-content collapse" id="collapse4">
              <li>
                <a href="#(0);" className="final-link">
                  <span>Kenilworth (RSA) 30th Apr (20:15)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Yarmouth 30th Apr (20:20)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Brighton 30th Apr (20:40)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Yarmouth 30th Apr (20:55)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Brighton 30th Apr (21:15)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Yarmouth 30th Apr (21:30)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Brighton 30th Apr (21:50)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Yarmouth 30th Apr (22:05)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Philadelphia (US) 30th Apr (22:10)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Brighton 30th Apr (22:25)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Philadelphia (US) 30th Apr (22:37)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Finger Lakes (US) 30th Apr (22:50)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Philadelphia (US) 30th Apr (23:04)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Finger Lakes (US) 30th Apr (23:19)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Philadelphia (US) 30th Apr (23:31)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Finger Lakes (US) 30th Apr (23:48)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Philadelphia (US) 30th Apr (23:58)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Finger Lakes (US) 30th Apr (00:17)</span>
                </a>
              </li>
              {/**/}
            </ul>
            {/**/}
          </li>
          <li className="nav-item">
            {/**/}
            {/**/}
            <a data-bs-toggle="collapse" className="nav-link" href="#collapse5">
              <img src="/assets/images/events/menu-4339.png" />
              <span>Greyhound Racing</span>
              <i className="bi bi-caret-down ms-auto" />
            </a>
            {/**/}
            {/**/}
            <ul className="nav-content collapse" id="collapse5">
              <li>
                <a href="#(0);" className="final-link">
                  <span>Romford 30th Apr (20:17)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Suffolk Downs 30th Apr (20:18)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Monmore 30th Apr (20:23)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Perry Barr 30th Apr (20:29)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Romford 30th Apr (20:36)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Suffolk Downs 30th Apr (20:38)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Monmore 30th Apr (20:41)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Perry Barr 30th Apr (20:47)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Romford 30th Apr (20:54)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Suffolk Downs 30th Apr (20:58)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Monmore 30th Apr (20:59)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Perry Barr 30th Apr (21:04)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Romford 30th Apr (21:12)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Suffolk Downs 30th Apr (21:18)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Monmore 30th Apr (21:19)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Perry Barr 30th Apr (21:24)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Romford 30th Apr (21:29)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Monmore 30th Apr (21:37)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Suffolk Downs 30th Apr (21:38)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Perry Barr 30th Apr (21:44)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Romford 30th Apr (21:49)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Monmore 30th Apr (21:57)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Suffolk Downs 30th Apr (21:58)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Perry Barr 30th Apr (22:03)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Suffolk Downs 30th Apr (22:14)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Crayford 30th Apr (22:19)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Central Park 30th Apr (22:26)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Suffolk Downs 30th Apr (22:32)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Crayford 30th Apr (22:38)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Central Park 30th Apr (22:44)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Crayford 30th Apr (22:57)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Central Park 30th Apr (23:02)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Towcester 30th Apr (23:04)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Swindon 30th Apr (23:08)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Crayford 30th Apr (23:14)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Doncaster 30th Apr (23:17)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Central Park 30th Apr (23:19)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Towcester 30th Apr (23:23)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Swindon 30th Apr (23:26)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Doncaster 30th Apr (23:32)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Crayford 30th Apr (23:33)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Towcester 30th Apr (23:38)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Central Park 30th Apr (23:39)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Swindon 30th Apr (23:44)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Crayford 30th Apr (23:51)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Towcester 30th Apr (23:53)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Central Park 30th Apr (23:57)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Swindon 30th Apr (00:02)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Crayford 30th Apr (00:07)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Towcester 30th Apr (00:08)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Central Park 30th Apr (00:14)</span>
                </a>
              </li>
              <li>
                <a href="#(0);" className="final-link">
                  <span>Swindon 30th Apr (00:19)</span>
                </a>
              </li>
              {/**/}
            </ul>
            {/**/}
          </li>
          <li className="nav-item">
            {/**/}
            {/**/}
            <a data-bs-toggle="collapse" className="nav-link" href="#collapse6">
              <img src="/assets/images/events/menu-99994.png" />
              <span>Kabaddi</span>
              <i className="bi bi-caret-down ms-auto" />
            </a>
            {/**/}
            <ul className="nav-content collapse" id="collapse6">
              {/**/}
            </ul>
            {/**/}
            {/**/}
          </li>
          <li className="nav-item">
            {/**/}
            {/**/}
            <a data-bs-toggle="collapse" className="nav-link" href="#collapse7">
              <img src="/assets/images/events/menu-99999.png" />
              <span>Casino</span>
              <i className="bi bi-caret-down ms-auto" />
            </a>
            {/**/}
            <ul className="nav-content collapse" id="collapse7">
              <li>
                <a data-bs-toggle="collapse" href="#collapse70">
                  <span>casino1</span>
                  <i className="bi bi-caret-down ms-auto" />
                </a>
                <div className="collapse" id="collapse70">
                  <ul className="nav-second-level">
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Super Over</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>3 Card Judgement</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Live Teenpatti</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Teenpatti T20</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Teenpatti Test</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>2 Cards Teenpatti</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Open Teenpatti</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Muflis Teenpatti</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Dragon Tiger</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>32 Cards Casino</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Bollywood Casino</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Amar Akbar Anthony</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Queen</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Baccarat</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>29 Card Baccarat</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Casino War</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Casino Meter</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Trio</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Hi Low</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Race 20-20</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Race to 17</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>7 Up &amp; Down</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Andar Bahar</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Poker</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Poker 20-20</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Six Player Poker</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>The Trap</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Matka</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Roulette</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Sicbo</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Dream Catcher</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Live Teenpatti (Virtual)</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Teenpatti T20 (Virtual)</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Dragon Tiger (Virtual)</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>7 Up &amp; Down (Virtual)</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Amar Akbar Anthony (Virtual)</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Andar Bahar (Virtual)</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>32 Cards Casino (Virtual)</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Hi Low (Virtual)</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Six Player Poker (Virtual)</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Poker (Virtual)</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Matka (Virtual)</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Roulette (Virtual)</span>
                      </a>
                    </li>
                    {/**/}
                  </ul>
                </div>
              </li>
              {/**/}
            </ul>
            {/**/}
            {/**/}
          </li>
          <li className="nav-item">
            {/**/}
            <a href="#(0)" className="nav-link final-link">
              <img src="/assets/images/events/menu-99991.png" />
              <span>Sports book</span>
            </a>
            {/**/}
            {/**/}
            <ul className="nav-content collapse" id="collapse8">
              {/**/}
            </ul>
            {/**/}
            {/**/}
          </li>
          <li className="nav-item">
            <a href="#(0)" className="nav-link final-link hightlight-smenu">
              <img src="/assets/images/events/menu-99998.png" />
              <span>Int Casino</span>
            </a>
            {/**/}
            {/**/}
            {/**/}
            <ul className="nav-content collapse" id="collapse9">
              {/**/}
            </ul>
            {/**/}
            {/**/}
          </li>
          <li className="nav-item">
            {/**/}
            {/**/}
            <a
              data-bs-toggle="collapse"
              className="nav-link"
              href="#collapse10"
            >
              <img src="/assets/images/events/menu-99990.png" />
              <span>Binary</span>
              <i className="bi bi-caret-down ms-auto" />
            </a>
            {/**/}
            <ul className="nav-content collapse" id="collapse10">
              <li>
                <a data-bs-toggle="collapse" href="#collapse100">
                  <span>Others</span>
                  <i className="bi bi-caret-down ms-auto" />
                </a>
                <div className="collapse" id="collapse100">
                  <ul className="nav-second-level">
                    <li>
                      <a href="javascript: void(0);" className="final-link">
                        <span>Binary / 2024-04-30</span>
                      </a>
                    </li>
                    {/**/}
                  </ul>
                </div>
              </li>
              {/**/}
            </ul>
            {/**/}
            {/**/}
          </li>
          {/**/}
          <li className="d-block d-sm-none nav-item">
            <a href="#(0)" className="nav-link final-link">
              <img src="/assets/images/menu-rules.png" />
              <span>rules</span>
            </a>
          </li>
          {/**/}
        </ul>
        <div
          id="carouselExampleIndicators"
          data-bs-ride="carousel"
          className="carousel slide"
        >
          <div
            className="carousel-inner"
            style={{
              background:
                'url("https://efesclubcdn.com/FTP/BETBABA/Home/sl-c-layer-one.png")',
            }}
          >
            <div className="carousel-item">
              <img src="/assets/images/ls_01.png" className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src="/assets/images/ls_02.png" className="d-block w-100" />
            </div>
            <div className="carousel-item active">
              <img src="/assets/images/ls_03.png" className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src="/assets/images/ls_04.png" className="d-block w-100" />
            </div>
          </div>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
            className="carousel-control-prev"
          >
            <span aria-hidden="true" className="carousel-control-prev-icon" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
            className="carousel-control-next"
          >
            <span aria-hidden="true" className="carousel-control-next-icon" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </aside>
    </app-sidebar>
  );
};

export default Sidebar;
