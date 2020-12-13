#!/usr/bin/env python3
import gkeepapi
import keyring
import config

#login
keep = gkeepapi.Keep()
success = keep.login(config.username, config.password)

#get note
oqNote = keep.get(config.note)

#write to file
f = open("quotes", "w")
f.write(oqNote.text)
