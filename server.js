const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

/* =========================
   FOLDERS
========================= */

const uploadDir = path.join(__dirname, "uploads");
const outputDir = path.join(__dirname, "outputs");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}


/* =========================
   MULTER
========================= */

const storage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },

  filename: function (req, file, cb) {

    const extension =
      path.extname(file.originalname);

    const name =
      Date.now() +
      "-" +
      Math.random()
        .toString(36)
        .substring(2, 8);

    cb(
      null,
      name + extension
    );

  }

});


const upload = multer({

  storage: storage,

  limits: {
    fileSize:
      5 * 1024 * 1024 * 1024
  },

  fileFilter: function (
    req,
    file,
    cb
  ) {

    if (
      file.mimetype &&
      file.mimetype.startsWith("video/")
    ) {

      cb(null, true);

    } else {

      cb(
        new Error(
          "Only video files are allowed."
        )
      );

    }

  }

});


/* =========================
   HOME
========================= */

app.get("/", (req, res) => {

  res.json({

    app:
      "AutoClip AI",

    status:
      "Backend is running",

    version:
      "1.0"

  });

});


/* =========================
   UPLOAD VIDEO
========================= */

app.post(
  "/api/upload",
  upload.single("video"),
  (req, res) => {

    try {

      if (!req.file) {

        return res.status(400).json({

          success: false,

          error:
            "No video uploaded."

        });

      }


      res.json({

        success: true,

        message:
          "Video uploaded successfully.",

        video: {

          id:
            path.basename(
              req.file.filename,
              path.extname(
                req.file.filename
              )
            ),

          filename:
            req.file.filename,

          originalName:
            req.file.originalname,

          size:
            req.file.size,

          path:
            req.file.path

        }

      });

    } catch (error) {

      console.error(error);

      res.status(500).json({

        success: false,

        error:
          "Upload failed."

      });

    }

  }
);


/* =========================
   ANALYZE VIDEO
========================= */

app.post(
  "/api/analyze",
  async (req, res) => {

    try {

      const {
        filename
      } = req.body;


      if (!filename) {

        return res.status(400).json({

          success: false,

          error:
            "Filename is required."

        });

      }


      const videoPath =
        path.join(
          uploadDir,
          filename
        );


      if (
        !fs.existsSync(videoPath)
      ) {

        return res.status(404).json({

          success: false,

          error:
            "Video not found."

        });

      }


      /*
        NEXT BACKEND STEP:

        1. FFmpeg reads video
        2. Whisper generates transcript
        3. Scene detection finds cuts
        4. AI scores interesting moments
        5. Best moments become clips
      */


      res.json({

        success: true,

        message:
          "Video analysis started.",

        status:
          "processing",

        filename:
          filename

      });

    } catch (error) {

      console.error(error);

      res.status(500).json({

        success: false,

        error:
          "Analysis failed."

      });

    }

  }
);


/* =========================
   GENERATE CLIPS
========================= */

app.post(
  "/api/generate",
  async (req, res) => {

    try {

      const {

        filename,

        clipLength = 45,

        format = "9:16",

        captionStyle = "bold",

        smartEdit = "viral"

      } = req.body;


      if (!filename) {

        return res.status(400).json({

          success: false,

          error:
            "Filename is required."

        });

      }


      const videoPath =
        path.join(
          uploadDir,
          filename
        );


      if (
        !fs.existsSync(videoPath)
      ) {

        return res.status(404).json({

          success: false,

          error:
            "Video not found."

        });

      }


      /*
        REAL PROCESSING WILL BE ADDED HERE.

        FFmpeg:
        - cut video
        - resize to 9:16
        - burn captions
        - export MP4

        Whisper:
        - speech recognition
        - timestamps
        - subtitles

        AI:
        - hook detection
        - highlight detection
        - best clip selection
      */


      res.json({

        success: true,

        message:
          "Clip generation started.",

        settings: {

          clipLength:
            Number(clipLength),

          format:
            format,

          captionStyle:
            captionStyle,

          smartEdit:
            smartEdit

        },

        status:
          "processing"

      });

    } catch (error) {

      console.error(error);

      res.status(500).json({

        success: false,

        error:
          "Clip generation failed."

      });

    }

  }
);


/* =========================
   JOB STATUS
========================= */

app.get(
  "/api/status/:jobId",
  (req, res) => {

    /*
      Later this endpoint will return:

      progress
      current step
      generated clips
      captions
      thumbnails
    */

    res.json({

      success: true,

      jobId:
        req.params.jobId,

      status:
        "processing",

      progress:
        0

    });

  }
);


/* =========================
   OUTPUT FILES
========================= */

app.use(
  "/outputs",
  express.static(outputDir)
);


/* =========================
   ERROR HANDLER
========================= */

app.use(
  (error, req, res, next) => {

    console.error(error);

    res.status(500).json({

      success: false,

      error:
        error.message ||
        "Server error."

    });

  }
);


/* =========================
   START SERVER
========================= */

app.listen(
  PORT,
  () => {

    console.log(
      `AutoClip AI running on port ${PORT}`
    );

  }
);
