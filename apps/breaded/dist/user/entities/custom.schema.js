"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IS_PREMIUM_SCHEMA = exports.IS_VERIFIED_SCHEMA = exports.BANNER_SCHEMA = exports.AVATAR_SCHEMA = void 0;
exports.AVATAR_SCHEMA = {
    url_image: String,
    is_approved: Boolean,
    created_at: String,
};
exports.BANNER_SCHEMA = {
    url_image: String,
    updated_at: String,
};
exports.IS_VERIFIED_SCHEMA = {
    is_valid: String,
    updated_at: String,
};
exports.IS_PREMIUM_SCHEMA = {
    is_valid: Boolean,
    updated_at: String,
};
//# sourceMappingURL=custom.schema.js.map