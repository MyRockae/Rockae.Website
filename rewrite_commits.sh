#!/bin/bash

# Configuration: Set your start date and interval (in days)
START_DATE="2021-01-01T12:00:00"  # Change to your desired start date/time
INTERVAL_DAYS=3                   # Interval between commits in days

# Create a backup branch in case things go wrong
git branch backup-$(date +%Y%m%d%H%M%S)

# Get the list of commit hashes in chronological order (assuming linear history)
COMMITS=($(git rev-list --reverse HEAD))
NUM_COMMITS=${#COMMITS[@]}

echo "Found $NUM_COMMITS commits."

# Create a new branch from the root commit
ROOT_COMMIT=$(git rev-list --max-parents=0 HEAD)
git checkout -b new-history $ROOT_COMMIT

# Initialize counter (to increment the date)
i=0

# For each commit in the original history:
# (Skip the root commit since we're already on it)
for commit in "${COMMITS[@]:1}"; do
    # Calculate new date: add i * INTERVAL_DAYS to the start date
    NEW_DATE=$(date -d "$START_DATE + $((i * INTERVAL_DAYS)) days" +"%Y-%m-%dT%H:%M:%S")
    echo "Cherry-picking commit $commit with new date $NEW_DATE"

    # Cherry-pick commit without committing immediately
    git cherry-pick -n $commit
    # Amend the commit with the new date for both author and committer
    GIT_AUTHOR_DATE="$NEW_DATE" GIT_COMMITTER_DATE="$NEW_DATE" \
      git commit --no-edit --date "$NEW_DATE"
    if [ $? -ne 0 ]; then
        echo "Cherry-pick failed for commit $commit. Aborting."
        exit 1
    fi
    i=$((i + 1))
done

echo "New history with updated commit dates created on branch 'new-history'."

# (Optional) Force push to GitHub (only do this if you're sure)
# git push --force origin new-history
