package roomServer

import (
	"net/http"
    "github.com/google/uuid"
)

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("/", func (w http.ResponseWriter, r *http.Request) {
		path := r.URL.Path
		if path == "/" {
			uuid7, _ := uuid.NewV7()
			newURL :=  path + uuid7.String()
			http.Redirect(w, r, newURL, http.StatusFound)
		} else {
			
		}
	})

	http.ListenAndServe(":3000", mux)
}
