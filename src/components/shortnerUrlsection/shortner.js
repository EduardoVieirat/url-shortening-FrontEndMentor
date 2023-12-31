import { UrlContext } from "@/context/context";
import "./style.css";
import { useContext } from "react";

export default function Shortner({ HandleUrlShortner, errorMessage }) {
  const { urlToShort, setUrlToShort, setUrlShorted } = useContext(UrlContext);

  function handleInput(event) {
    setUrlToShort(event.target.value);
  }

  function handleEnter(event) {
    if (event.key === "Enter") {
      if (event.target.value == "") {
        return setUrlShorted({
          code: "",
          short_link: "",
          full_short_link: "",
          short_link2: "",
          full_short_link2: "",
          short_link3: "",
          full_short_link3: "",
          share_link: "",
          full_share_link: "",
          original_link: "",
        });
      }

      HandleUrlShortner();
      setUrlToShort(event.target.value);
    }
  }

  return (
    <section className="shortner-section">
      <div>
        <input
          onChange={handleInput}
          className={`input-shortner ${errorMessage !== "" && "error-alert"}`}
          type="text"
          placeholder="Shorten a link here..."
          value={urlToShort}
          onKeyDown={handleEnter}
        />

        <button className="btn-shortner" onClick={() => HandleUrlShortner()}>
          Shorten It!
        </button>
      </div>

      {errorMessage !== "" && (
        <span className="error-message">{errorMessage}</span>
      )}
    </section>
  );
}
