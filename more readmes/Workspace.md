## `(Optional)` Setting Git Bash (or any Terminal you want) as your Terminal for this Workspace

> In case you still prefer another terminal as your default terminal and not Git Bash but you want to do the Git Bash method for running this bot, you can do the following.

---

- Go to the location where you put the Bot's files. Either open vsc then go to **File > Open Folder <ins>(or do Ctrl + K + O)</ins>** or you go to your actual files location in File Explorer, right click your Mouse to open context menu, choose *Open in Terminal* and type `code .`

### Now you can do this in 2 ways
> **Method 1: A lil bit long in my opinion**
- Open Workspace Settings (JSON). Do **Ctrl + P** to open VSC command palette then type `>Preferences: Open Workspace Settings (JSON)` although you usually see it immediately even if you don't type all of that. Anyways open that. This should create a folder `.vscode` that has this file named `settings.json` <ins>(in case you still don't have this file)</ins>
- Now, put this in `settings.json`
```json
{
  "terminal.integrated.profiles.windows": {
    "Git Bash": {
      "path": "C:\\Program Files\\Git\\bin\\bash.exe"
    }
  },
  "terminal.integrated.defaultProfile.windows": "Git Bash"
}
```
> **PS:** Make sure that the path to `bash.exe` matches your Git installation

---

> **Method 2: Much easier in my opinion**
- Go to **File > Save Workspace As...**. This would create the file `[Your folder name].code-workspace`. You can change the name of <ins>[Your folder name]</ins> if you want to.
- This is what it would usually look like when you open the file:
```json
{
	"folders": [
		{
			"path": "."
		}
	],
	"settings": {}
}
```

- Now put this under `"settings:"`
```json
"terminal.integrated.defaultProfile.windows": "Git Bash"
```

This is what it should look like
```json
{
	"folders": [
		{
			"path": "."
		}
	],
	"settings": {
		"terminal.integrated.defaultProfile.windows": "Git Bash"
	}
}
```

---

#### After doing which method you chose...
- Save the file then open a new Terminal. Go to **Terminal > New Terminal <ins>(or do Ctrl + Shift + `)</ins>**. This should open Git Bash in this workspace.

---

**PS:** If you want to use other terminal
- Method 1: Make sure you find the path to that exe
- Method 2: Just put the actual name