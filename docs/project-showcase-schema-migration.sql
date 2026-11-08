-- Run this once against an existing production PostgreSQL database before
-- deploying the updated Project entity.
ALTER TABLE project ADD COLUMN IF NOT EXISTS demo_video_url VARCHAR(500);
DO $$
BEGIN
    IF EXISTS (
        SELECT 1 FROM information_schema.columns
        WHERE table_schema = current_schema()
          AND table_name = 'project' AND column_name = 'demo_url'
    ) THEN
        UPDATE project
        SET demo_video_url = demo_url
        WHERE demo_video_url IS NULL AND demo_url IS NOT NULL;
    END IF;
END $$;

ALTER TABLE project ADD COLUMN IF NOT EXISTS presentation_url VARCHAR(500);
ALTER TABLE project ADD COLUMN IF NOT EXISTS thumbnail_url VARCHAR(500);
-- Preserve thumbnails if a prior showcase version used image_src. Keep old
-- columns for rollback, but remove the old theme requirement for new rows.
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = current_schema() AND table_name = 'project' AND column_name = 'image_src') THEN
        UPDATE project SET thumbnail_url = image_src WHERE thumbnail_url IS NULL AND image_src IS NOT NULL;
    END IF;
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = current_schema() AND table_name = 'project' AND column_name = 'cover_theme') THEN
        ALTER TABLE project ALTER COLUMN cover_theme DROP NOT NULL;
    END IF;
END $$;
ALTER TABLE project ADD COLUMN IF NOT EXISTS categories VARCHAR(255)[];
ALTER TABLE project ALTER COLUMN website_url DROP NOT NULL;

-- Keep demo_url temporarily so existing data can be audited. Remove it only
-- after verifying that every needed value was copied to demo_video_url.
-- ALTER TABLE project DROP COLUMN demo_url;
