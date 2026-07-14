const SubmissionHistory = ({ history }) => {
  if (!history || history.length === 0) {
    return (
      <div
        className="py-10 text-center rounded-xl"
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px dashed rgba(255,255,255,0.1)",
          color: "#6B7280",
        }}
      >
        No submission history found.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {history.map((item) => (
        <div
          key={item._id}
          className="rounded-xl p-4"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h3
            style={{
              color: "#F3F4F6",
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            {item.taskId?.title || "Deleted Task"}
          </h3>

          <p style={{ color: "#9CA3AF", marginTop: "6px" }}>
            <strong>Status:</strong> {item.reviewStatus}
          </p>

          <p style={{ color: "#9CA3AF" }}>
            <strong>Notes:</strong> {item.notes || "No notes"}
          </p>

          <p style={{ color: "#9CA3AF" }}>
            <strong>Submitted:</strong>{" "}
            {new Date(item.createdAt).toLocaleDateString("en-US", {
               year: "numeric",
               month: "short",
               day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>

          {item.fileUrl && (
            <a
              href={item.fileUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#60A5FA",
                display: "inline-block",
                marginTop: "10px",
              }}
            >
              View Submitted File
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default SubmissionHistory;