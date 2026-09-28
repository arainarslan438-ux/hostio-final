export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b1020",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "32px",
            fontWeight: "700",
            marginBottom: "30px",
          }}
        >
          Hostio
        </div>

        <div
          style={{
            color: "#38bdf8",
            fontSize: "15px",
            fontWeight: "700",
            letterSpacing: "2px",
          }}
        >
          FREE WEB HOSTING
        </div>

        <h1
          style={{
            fontSize: "56px",
            lineHeight: "1.1",
            margin: "20px 0",
          }}
        >
          Apni website
          <br />
          Hostio par host karein.
        </h1>

        <p
          style={{
            color: "#aab3c5",
            fontSize: "19px",
            lineHeight: "1.6",
            margin: "0 auto",
            maxWidth: "620px",
          }}
        >
          HTML, CSS aur JavaScript website upload karein
          aur apna free Hostio subdomain hasil karein.
        </p>

        <button
          style={{
            marginTop: "30px",
            padding: "14px 28px",
            border: "none",
            borderRadius: "8px",
            background: "#38bdf8",
            color: "#06111d",
            fontSize: "16px",
            fontWeight: "700",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>

        <div
          style={{
            marginTop: "55px",
            padding: "18px",
            borderRadius: "10px",
            background: "#111827",
            border: "1px solid #25304a",
            color: "#e2e8f0",
          }}
        >
          username.hostio.site
        </div>
      </div>
    </main>
  );
}
