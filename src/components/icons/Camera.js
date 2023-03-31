export const Camera = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        style={{ filter: "drop-shadow(1px 1px rgba(0, 0, 0, 0.6))" }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.1679 4.4453C11.3534 4.1671 11.6656 4 12 4H20C20.3344 4 20.6466 4.1671 20.8321 4.4453L22.5352 7H26C26.7957 7 27.5587 7.31607 28.1213 7.87868C28.6839 8.44129 29 9.20435 29 10V24C29 24.7957 28.6839 25.5587 28.1213 26.1213C27.5587 26.6839 26.7957 27 26 27H6C5.20435 27 4.44129 26.6839 3.87868 26.1213C3.31607 25.5587 3 24.7957 3 24V10C3 9.20435 3.31607 8.44129 3.87868 7.87868C4.44129 7.31607 5.20435 7 6 7H9.46482L11.1679 4.4453ZM12.5352 6L10.8321 8.5547C10.6466 8.8329 10.3344 9 10 9H6C5.73478 9 5.48043 9.10536 5.29289 9.29289C5.10536 9.48043 5 9.73478 5 10V24C5 24.2652 5.10536 24.5196 5.29289 24.7071C5.48043 24.8946 5.73478 25 6 25H26C26.2652 25 26.5196 24.8946 26.7071 24.7071C26.8946 24.5196 27 24.2652 27 24V10C27 9.73478 26.8946 9.48043 26.7071 9.29289C26.5196 9.10536 26.2652 9 26 9H22C21.6656 9 21.3534 8.8329 21.1679 8.5547L19.4648 6H12.5352Z"
          fill="#fff"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 13C14.067 13 12.5 14.567 12.5 16.5C12.5 18.433 14.067 20 16 20C17.933 20 19.5 18.433 19.5 16.5C19.5 14.567 17.933 13 16 13ZM10.5 16.5C10.5 13.4624 12.9624 11 16 11C19.0376 11 21.5 13.4624 21.5 16.5C21.5 19.5376 19.0376 22 16 22C12.9624 22 10.5 19.5376 10.5 16.5Z"
          fill="#fff"
        />
      </svg>
    </div>
  );
};