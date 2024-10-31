type fetchDataProps = {
  path: string;
  method?: "GET" | "PUT" | "POST" | "DELETE" | "PATCH" | undefined
  body?: object | undefined
  token?: string | undefined
}