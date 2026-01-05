Ai Voice App Builder

API: 5f067ceaae8c4e46982d4f70362f384e

Ruby code: 

```
require 'net/http'
require 'json'

base_url = 'https://api.assemblyai.com'
headers = {
  'authorization' => '5f067ceaae8c4e46982d4f70362f384e',
  'content-type' => 'application/json'
}

audio_url = 'https://assembly.ai/wildfires.mp3'

data = {
  "audio_url" => audio_url,
  "speech_model" => "universal"
}

uri = URI.parse("#{base_url}/v2/transcript")
http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true
request = Net::HTTP::Post.new(uri.request_uri, headers)
request.body = data.to_json
response = http.request(request)
response_body = JSON.parse(response.body)

unless response.is_a?(Net::HTTPSuccess)
  raise "API request failed with status #{response.code}: #{response.body}"
end

transcript_id = response_body['id']
puts "Transcript ID: #{transcript_id}"

polling_endpoint = URI.parse("#{base_url}/v2/transcript/#{transcript_id}")
while true
  polling_http = Net::HTTP.new(polling_endpoint.host, polling_endpoint.port)
  polling_http.use_ssl = true
  polling_request = Net::HTTP::Get.new(polling_endpoint.request_uri, headers)
  polling_response = polling_http.request(polling_request)
  transcription_result = JSON.parse(polling_response.body)
  
  if transcription_result['status'] == 'completed'
    puts "Transcription text: #{transcription_result['text']}"
    break
  elsif transcription_result['status'] == 'error'
    raise "Transcription failed: #{transcription_result['error']}"
  else
    puts 'Waiting for transcription to complete...'
    sleep(3)
  end
end
```

---

JavaScript Code

```
 // Install the axios and fs-extra package by executing the command "npm install axios fs-extra"

import axios from "axios";
import fs from "fs-extra";

const baseUrl = "https://api.assemblyai.com";

const headers = {
  authorization: "5f067ceaae8c4e46982d4f70362f384e",
};

// You can upload a local file using the following code
// const path = "./my-audio.mp3";
// const audioData = await fs.readFile(path);
// const uploadResponse = await axios.post(`${baseUrl}/v2/upload`, audioData, {
//   headers,
// });
// const audioUrl = uploadResponse.data.upload_url;

const audioUrl = "https://assembly.ai/wildfires.mp3";

const data = {
  audio_url: audioUrl,
  speech_model: "universal",
};

const url = `${baseUrl}/v2/transcript`;
const response = await axios.post(url, data, { headers: headers });

const transcriptId = response.data.id;
const pollingEndpoint = `${baseUrl}/v2/transcript/${transcriptId}`;

while (true) {
  const pollingResponse = await axios.get(pollingEndpoint, {
    headers: headers,
  });
  const transcriptionResult = pollingResponse.data;

  if (transcriptionResult.status === "completed") {
    console.log(transcriptionResult.text);
    break;
  } else if (transcriptionResult.status === "error") {
    throw new Error(`Transcription failed: ${transcriptionResult.error}`);
  } else {
    await new Promise((resolve) => setTimeout(resolve, 3000));
  }
}
```

