# Student Management App

**Status:** Public practice / CI demo. Small browser-only CRUD sketch, not a production product.

A single-page student list: add a name, see a running count, delete rows. No backend, no database, no auth.

---

## What it is

| Piece | Role |
| --- | --- |
| `index.html` | Markup: name input, list, count, unused search box |
| `style.css` | Basic page styles |
| `script.js` | `addStudent()` — append / delete list items in the DOM |
| `Jenkinsfile` | Local Jenkins pipeline (Windows `bat` steps) |
| `.github/workflows/ci.yml` | GitHub Actions: file-presence checks on push/PR |

Data lives only in the open tab. Refresh clears the list.

---

## Run locally

Any static file server, or open the HTML file:

```bash
# from repo root
python3 -m http.server 8765
```

Then open [http://127.0.0.1:8765/](http://127.0.0.1:8765/).

No build step. No `npm install`.

---

## CI

- **GitHub Actions** (`.github/workflows/ci.yml`): verifies `index.html`, `style.css`, and `script.js` exist on `main` and named feature branches.
- **Jenkins** (`Jenkinsfile`): checkout → validate → copy into `dist/` → smoke check. Written for a Windows Jenkins agent (`bat`).

---

## Notes for reviewers

- The search box in `index.html` has no handler yet.
- Count updates when you add; delete buttons remove the row but do not recompute the count (known quirk).
- Suitable as a Jenkins / Actions learning sample, not as a portfolio flagship.

## License

Personal practice repo.
