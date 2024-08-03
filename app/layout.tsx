export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}
        <div>abcd12</div>
      </body>
    </html>
  );
}
