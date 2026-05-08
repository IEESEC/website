/**
 * Page Container gia pages ekos tou hero.
 * Vazei top padding gia na min krybetai to ypoloipo content piso apo to navbar.
 */
export function PageContainer({ children }: { children: React.ReactNode }) {
  return <main className="relative z-10 flex flex-col flex-1 pt-24 pb-16">{children}</main>;
}
