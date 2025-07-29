git-config:
	git config core.hooksPath .githooks
	chmod +x .githooks/pre-commit

pre-commit:
	git hook run pre-commit
