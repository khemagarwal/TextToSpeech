const textToSpeech = require('@google-cloud/text-to-speech')

require('dotenv').config()

const fs = require('fs')

const util = require('util')

const client= new textToSpeech.TextToSpeechClient()


async function convertToMP3(){
    const text = "hello Nikita, how are you"

    const request={
        input:{text:text},
        voice:{languageCode:'en-US', ssmlGender:'NEUTRAL'},
        audioConfig:{audioEncoding:'MP3'},
    }

    const [response] = await client.synthesizeSpeech(request)
    const writeFile = util.promisify(fs.writeFile)

    await writeFile("output.mp3", response.audioContent,'binary')
}


convertToMP3()