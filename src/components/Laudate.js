import "./Laudate.css";

function Laudate({ mode = "light" }) {
  return (
    <div className={`laudate laudate-${mode}`}>
      <div className="content">
        <h1>Laudate</h1>
        <p>
          Laudate Dominum Laudáte Dóminum omnes gentes omnes populi; Quóniam
          confirmáta est súper nos misericordia eius et véritas Domini mánet in
          æternum (2)
        </p>

        <p>
          [At this point all rise and mark themselves with the Sign of the Cross
          as they sing the Glory Be]
        </p>

        <p>
          Glória Pátri et Filio et Spiritui Sáncto. Sicut érat in pricipio et
          nunc et semper et in sáecula sáeculorum Amen.
        </p>

        <p>
          Laudáte Dóminum omnes gentes omnes populi; Quóniam confirmáta est
          súper nos misericordia eius et véritas Domini mánet in æternum
        </p>
      </div>

      <div className="video-wrapper">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/IvK90ijOQDw?si=DKMsagQAfZQ-BR2h"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Laudate;
