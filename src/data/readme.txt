### Command for periodic Data fetching
$ watch -n 86400 bash backend.sh

or use crontab

$ export EDITOR=vi
$ crontab -e
59 23 * * * /home/filtering-dashboard/src/data/backend.sh
$ crontab -l