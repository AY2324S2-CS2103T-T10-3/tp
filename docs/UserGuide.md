---
  layout: default.md
  title: "User Guide"
  pageNav: 3
---

# AB-3 User Guide

AddressBook Level 3 (AB3) is a **desktop app for managing contacts, optimized for use via a  Line Interface** (CLI) while still having the benefits of a Graphical User Interface (GUI). If you can type fast, AB3 can get your contact management tasks done faster than traditional GUI apps.

<!-- * Table of Contents -->
<page-nav-print />

--------------------------------------------------------------------------------------------------------------------

## Quick start

1. Ensure you have Java `11` or above installed in your Computer.

1. Download the latest `addressbook.jar` from [here](https://github.com/se-edu/addressbook-level3/releases).

1. Copy the file to the folder you want to use as the _home folder_ for your AddressBook.

1. Open a command terminal, `cd` into the folder you put the jar file in, and use the `java -jar addressbook.jar` command to run the application.<br>
   A GUI similar to the below should appear in a few seconds. Note how the app contains some sample data.<br>
   ![Ui](images/Ui.png)

1. Type the command in the command box and press Enter to execute it. e.g. typing **`help`** and pressing Enter will open the help window.<br>
   Some example commands you can try:

   * `list` : Lists all contacts.

   * `add n/John Doe p/98765432 e/johnd@example.com a/John street, block 123, #01-01` : Adds a contact named `John Doe` to the Address Book.

   * `delete 3` : Deletes the 3rd contact shown in the current list.

   * `clear` : Deletes all contacts.

   * `exit` : Exits the app.

1. Refer to the [Features](#features) below for details of each command.

--------------------------------------------------------------------------------------------------------------------

## Features

### Selecting an event: `sel`

**Format:** `sel <event index>`

**Description:**

Selects an event from the event list by the event index.

<box type="warning" seamless>

**Caution:**
* `<event index>` should be an **integer** no larger than the number of events in the event list.

</box>

**Examples:**
- `sel 3` selects the event with index `3`.

### Deselecting an event: `desel`

**Format:** `desel`

**Description:**

Deselects the selected event and returns to the global participant list.

**Examples:**
- After `select 3` which selects the event with index `3`, `desel` deselects the event indexed `3`.

### Deleting a participant from the global participant list: `delp`

**Format:** `delp <index>`

**Description:**
- If **no event is selected**, this deletes the participant from both the **global participant list** and **all the 
events** he/she is in by **his/her index in the global participant list**.
- If **an event is selected**, this only removes the participant from the event by **his/her index in the 
event participant list**.

<box type="warning" seamless>

**Caution:**
* `<index>` should be an **integer**. 
* A participant's `<index>` in an event participant list can be **different** from that in the global participant list.
* `<index>` should be no larger than the number of participants in the global participant list if no event is selected.
* `<index>` should be no larger than the number of participants in the event participant list if an event is selected.

</box>

**Examples:**
- When no event is selected, `delp 9` deletes the participant with the index `9` completely.
- `delp 9` after `sel 3` removes the participant with index `9` from event `3`'s participant list.



--------------------------------------------------------------------------------------------------------------------

## FAQ

**Q**: How do I transfer my data to another Computer?<br>
**A**: Install the app in the other computer and overwrite the empty data file it creates with the file that contains the data of your previous AddressBook home folder.

--------------------------------------------------------------------------------------------------------------------

## Known issues

1. **When using multiple screens**, if you move the application to a secondary screen, and later switch to using only the primary screen, the GUI will open off-screen. The remedy is to delete the `preferences.json` file created by the application before running the application again.

--------------------------------------------------------------------------------------------------------------------

## Command summary

Action     | Format, Examples
-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------
**Add**    | `add n/NAME p/PHONE_NUMBER e/EMAIL a/ADDRESS [t/TAG]…​` <br> e.g., `add n/James Ho p/22224444 e/jamesho@example.com a/123, Clementi Rd, 1234665 t/friend t/colleague`
**Clear**  | `clear`
**Delete** | `delete INDEX`<br> e.g., `delete 3`
**Edit**   | `edit INDEX [n/NAME] [p/PHONE_NUMBER] [e/EMAIL] [a/ADDRESS] [t/TAG]…​`<br> e.g.,`edit 2 n/James Lee e/jameslee@example.com`
**Find**   | `find KEYWORD [MORE_KEYWORDS]`<br> e.g., `find James Jake`
**List**   | `list`
**Help**   | `help`
