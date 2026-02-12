import { useEffect, useMemo, useState } from "react";
import NextLink from "next/link";

function normalizeTo(to = "/") {
  return typeof to === "string" ? to : to?.pathname || "/";
}

export function Link({ to = "/", href, children, ...props }) {
  const targetHref = href || normalizeTo(to);
  return (
    <NextLink href={targetHref} {...props}>
      {children}
    </NextLink>
  );
}

export function NavLink({ to = "/", className, children, ...props }) {
  const [currentPath, setCurrentPath] = useState("/");
  useEffect(() => {
    if (typeof window === "undefined") return;
    setCurrentPath(window.location.pathname || "/");
  }, []);
  const target = normalizeTo(to).split("?")[0];
  const current = currentPath;
  const isActive = current === target || (target !== "/" && current.startsWith(`${target}/`));
  const resolvedClassName = typeof className === "function" ? className({ isActive }) : className;

  return (
    <Link to={target} className={resolvedClassName} {...props}>
      {children}
    </Link>
  );
}

export function useNavigate() {
  return (to, options = {}) => {
    if (typeof window === "undefined") return;
    if (typeof to === "number") {
      if (to < 0) window.history.back();
      return;
    }
    const target = normalizeTo(to);
    if (options.replace) {
      window.location.replace(target);
      return;
    }
    window.location.assign(target);
  };
}

export function Navigate({ to = "/", replace = false }) {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(to, { replace });
  }, [navigate, replace, to]);
  return null;
}

export function useParams() {
  if (typeof window === "undefined") return {};
  const segments = window.location.pathname.split("/").filter(Boolean);
  const params = {};
  if (segments[0] === "service" && segments[1]) params.serviceId = segments[1];
  if (segments[0] === "blog" && segments[1]) params.postId = segments[1];
  if (segments[0] === "user" && segments[1]) params.userid = segments[1];
  return params;
}

export function useSearchParams() {
  const searchParams = useMemo(() => {
    if (typeof window === "undefined") return new URLSearchParams("");
    const query = window.location.search.replace(/^\?/, "");
    return new URLSearchParams(query);
  }, []);
  const setSearchParams = () => {};
  return [searchParams, setSearchParams];
}

export function useLocation() {
  if (typeof window === "undefined") {
    return { pathname: "/", search: "", hash: "" };
  }
  const pathname = window.location.pathname || "/";
  const search = window.location.search || "";
  const hash = window.location.hash || "";
  return {
    pathname,
    search,
    hash,
  };
}

export function useLoaderData() {
  return undefined;
}

export function createBrowserRouter() {
  return null;
}

export function RouterProvider() {
  return null;
}

export function Outlet() {
  return null;
}

export function Route() {
  return null;
}
